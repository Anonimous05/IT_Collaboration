import React, {Component} from 'react';
import './Specialists.css';

class Specialists extends Component {

    state = {
        catalogs: [
            "Software",
            "Hardware",
            "Analytics",
            "Design",
            "Management",
            "Marketing",
            "Other"
        ],
        subCatalogs: [
            {name: "Web", parent: "Software"},
            {name: "Backend", parent: "Software"},
            {name: "Frontend", parent: "Software"},
            {name: "Mobile", parent: "Software"},
            {name: "Mobile", parent: "Software"},
            {name: "Desktop", parent: "Software"},
            {name: "GameDev", parent: "Software"},
            {name: "QA", parent: "Software"},
            {name: "Database", parent: "Software"},
            {name: "Data Science", parent: "Software"},
            {name: "Cloud Computing", parent: "Software"},
            {name: "Cyber Security", parent: "Software"},

            {name: "Hardware SubCatalog", parent: "Hardware"},
            {name: "Hardware SubCatalog", parent: "Hardware"},

            {name: "Analytics SubCatalog", parent: "Analytics"},
            {name: "Analytics SubCatalog", parent: "Analytics"},

            {name: "Design SubCatalog", parent: "Design"},
            {name: "Design SubCatalog", parent: "Design"},
            {name: "Design SubCatalog", parent: "Design"},

            {name: "Management SubCatalog", parent: "Management"},
            {name: "Management SubCatalog", parent: "Management"},
            {name: "Management SubCatalog", parent: "Management"},
            {name: "Management SubCatalog", parent: "Management"},
            {name: "Management SubCatalog", parent: "Management"},

            {name: "Marketing SubCatalog", parent: "Marketing"},
            {name: "Marketing SubCatalog", parent: "Marketing"},
            {name: "Marketing SubCatalog", parent: "Marketing"},
        ],
        subCatalogMenu: [
            {name: "Web", parent: "Software"},
            {name: "Backend", parent: "Software"},
            {name: "Frontend", parent: "Software"},
            {name: "Mobile", parent: "Software"},
            {name: "Mobile", parent: "Software"},
            {name: "Desktop", parent: "Software"},
            {name: "GameDev", parent: "Software"},
            {name: "QA", parent: "Software"},
            {name: "Database", parent: "Software"},
            {name: "Data Science", parent: "Software"},
            {name: "Cloud Computing", parent: "Software"},
            {name: "Cyber Security", parent: "Software"},
        ]
    }

    subCatalogs = (id) => {
        const filter = this.state.subCatalogs.filter(sub => sub.parent === this.state.catalogs[id]);
        this.setState({subCatalogMenu: filter});
    }

    render() {
        return (
            <div className="SpecialistsContainer">
                <div className="menu_1">
                    <ul>
                        {Object.keys(this.state.catalogs).map(name => (
                            <li onClick={() => this.subCatalogs(name)} key={name}>{this.state.catalogs[name]}</li>
                        ))}
                    </ul>
                </div>
                <div className="container">

                </div>
                <div className="menu_2">
                    <ul>
                        {Object.keys(this.state.subCatalogMenu).map(name => (
                            <li key={name}>{this.state.subCatalogMenu[name].name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Specialists;