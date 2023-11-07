import * as stringUtl from "./string-utils";
const tranformPersonNameToCapitalLetter = (person) => {
    const { name } = person;
    return {
        ...person,
        name: stringUtl.capitalizeFirstLetter(name),
    };
};
export default function xx123() {
    return 10;
}
export { tranformPersonNameToCapitalLetter as nameCapitalizer };
