import React, {Component} from 'react';
import './Companies.css';

class Companies extends Component {

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
            {name: "Software SubCatalog", parent: "Software"},
            {name: "Software SubCatalog", parent: "Software"},
            {name: "Software SubCatalog", parent: "Software"},
            {name: "Software SubCatalog", parent: "Software"},

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
            {name: "Software SubCatalog", parent: "Software"},
            {name: "Software SubCatalog", parent: "Software"},
            {name: "Software SubCatalog", parent: "Software"},
            {name: "Software SubCatalog", parent: "Software"},
        ]
    }

    subCatalogs = (id) => {
        const filter = this.state.subCatalogs.filter(sub => sub.parent === this.state.catalogs[id]);
        this.setState({subCatalogMenu: filter});
    }

    render() {
        return (
            <div className="CompaniesContainer">
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

export default Companies;