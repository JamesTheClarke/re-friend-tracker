export class GuiModel {

 

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.

    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

 

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick

    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.

    */

 

    private _guiModel = {

        "application": {

            "title": "James' Friend Tracker",

            "formList": [

                {

                    "id": "FriendForm",

                    "title": "Friend",

                    "formFieldList": [

                        {

                            "id": "familyName",

                            "type": "text",

                            "name": "FamilyName",

                            "width": 1,

                            "required": true

                        },

                        {

                            "id": "firstName",

                            "type": "text",

                            "name": "FirstName",

                            "width": 1,

                            "required": true

                        },

                        {

                            "id": "nickname",

                            "type": "text",

                            "name": "Nickname",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id":   "group",

                            "type": "autocomplete",

                            "name": "Group",

                            "data": [ "Study", "Family", "School" ],

                            "form": "GroupForm",

                            "width": 2

                        },

                        {

                            "id":   "location",

                            "type": "autocomplete",

                            "name": "Location",

                            "data": [ "Winterthur", "Zürich" ],

                            "form": "GroupForm",

                            "width": 2

                        },

                        {

                            "id": "evtBirth",

                            "type": "date",

                            "name": "Birthday",

                            "width": 2

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "maxLength": 5000,

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "LocationForm",

                    "title": "Location",

                    "formFieldList": [

                        {

                            "id": "name",

                            "type": "text",

                            "name": "LocationName",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "maxLength": 5000,

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "GroupForm",

                    "title": "Group",

                    "formFieldList": [

                        {

                            "id": "name",

                            "type": "text",

                            "name": "GroupName",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "maxLength": 5000,

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "ActivityForm",

                    "title": "Activity",

                    "formFieldList": [

                        {

                            "id": "name",

                            "type": "text",

                            "name": "Name",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id":   "location",

                            "type": "autocomplete",

                            "name": "Location",

                            "data": [ "Winterthur", "Zürich" ],

                            "form": "GroupForm",

                            "width": 2

                        },

                        {

                            "id": "date",

                            "type": "date",

                            "name": "Date",

                            "width": 2

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "maxLength": 5000,

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                }

            ],

            "pageList": [

                {

                    "id": "mainmenu",

                    "name": "MainMenu",

                    "elementList": [

                        {

                            "type": "button",

                            "name": "Friends",

                            "icon": "fa-user",

                            "color": "blue",

                            "page": "friendspage",

                        },

                        {

                            "type": "button",

                            "name": "Location",

                            "icon": "fa-cubes",

                            "color": "yellow",

                            "page": "locationspage",

                        },

                        {

                            "type": "button",

                            "name": "Groups",

                            "icon": "fa-weixin",

                            "color": "wisteria",

                            "page": "groupspage",

                        },

                    ]

                },

                {

                    "id": "friendspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewFriend",

                            "icon": "fa-user",

                            "color": "green",

                            "form": {

                                "form": "FriendForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-user",

                            "color": "blue",

                            "search": true,

                            "data": [ { name: "Clark Kent" }, { name: "Bruce Wayne"} ],

                            "page": "activitypage",

                        },

                    ]

                },

                {

                    "id": "locationspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewLocation",

                            "icon": "fa-home",

                            "color": "green",

                            "form": {

                                "form": "LocationForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-home",

                            "color": "blue",

                            "search": true,

                            "data": [ { name: "Hamburg" }, { name: "New York" }, { name: "Winterthur"}, { name: "Zürich"} ],

                            "form": {

                                "form": "LocationForm"

                            }

                        },

                    ]

                },

                {

                    "id": "groupspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewGroup",

                            "icon": "fa-weixin",

                            "color": "green",

                            "form": {

                                "form": "GroupForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-weixin",

                            "color": "wisteria",

                            "search": true,

                            "data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],

                            "form": {

                                "form": "GroupForm"

                            }

                        },

                    ]

                },

                                                      {

                    "id": "activitypage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewActivity",

                            "icon": "fa-calendar",

                            "color": "green",

                            "form": {

                                "form": "ActivityForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-calendar",

                            "color": "wisteria",

                            "search": true,

                            "data": [ { name: "Gym" }, { name: "Shooting Lasers from my Eyes" }, { name: "Netflix & Chill"}],

                            "form": {

                                "form": "ActivityForm"

                            }

                        },

                    ]

                }

            ]

        }

    };

 

 

    get guiModel() {

        return this._guiModel;

    }

}
