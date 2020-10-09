import store from "./store/UI-store";
import { SetCompanies } from "./actions/companyAction"
import { SetGroups } from "./actions/groupAction"
import { SetObjects } from "./actions/objectAction";


class Loader {

    async load() {
        if (!store.getState().auth.isAuthorized) {
            return;
        }

        let companies, groups, objects;

        const companiesResponse = await (await fetch(
            'https://web.fort-monitor.ru/api/integration/v1/getcompanieslist',
            { mode: 'cors', credentials: 'include' })).json();
        if (companiesResponse.result === "Ok") {
            companies = companiesResponse.companies;
        } else {
            // TODO report error
        }

        const groupsResponse = await (await fetch(
            'https://web.fort-monitor.ru/api/integration/v1/getobjectgroupslist',
            { mode: 'cors', credentials: 'include' })).json();
        if (groupsResponse.result === "Ok") {
            groups = groupsResponse.groups;
        } else {
            // TODO report error
        }

        const objectsResponse = await (await fetch(
            'https://web.fort-monitor.ru/api/integration/v1/getobjectslist?companyId=0',
            { mode: 'cors', credentials: 'include' })).json();
        if (objectsResponse.result === "Ok") {
            objects = objectsResponse.objects
        } else {
            // TODO report error
        }

        this.buildTree(companies, groups, objects);

        store.dispatch(SetCompanies(companies));
        store.dispatch(SetGroups(groups));
        store.dispatch(SetObjects(objects));
    }

    buildTree(companies, groups, objects) {
        for (const company of companies) {
            company.groups = [];
            company.isExpanded = false;
        }
        for (const group of groups) {
            group.isExpanded = false;

            group.company = companies.find(company => company.id === group.companyId) || null;
            group.parentGroup = groups.find(otherGroup => otherGroup.id === group.parentGroupId) || null;

            if (group.company) {
                group.company.groups.push(group);
            }
        }
        for (const group of groups) {
            group.childGroups = groups.filter(child => child.parentGroup === group);
        }

        const buildDepth = (group, depth) => {
            group.depth = depth;
            for (const child of group.childGroups) {
                buildDepth(child, depth + 1);
            }
        };
        for (const group of groups) {
            if (group.parentGroup === null) {
                buildDepth(group, 0);
            }

            for (const object of objects) {
                if (group.id === object.groupId) {
                    if (!group.children) {
                        group.children = []
                    }
                    group.children.push(object)
                }
            }
        }


    }
}

const loader = new Loader();

export default loader;
