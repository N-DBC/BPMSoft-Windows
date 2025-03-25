define("AccountPageV2", [], function() {
	return {
		entitySchemaName: "Account",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		businessRulesMultiplyActions: /**SCHEMA_ANGULAR_BUSINESS_RULES*/{}/**SCHEMA_ANGULAR_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "AccountPhotoContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountCompletenessContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "AccountCompletenessContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "EnrichmentButtonContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "EnrichmentButtonContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "AccountName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountType",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountOwner",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountWeb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountPhone",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7
					}
				}
			},
			{
				"operation": "merge",
				"name": "NewAccountCategory",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountIndustry",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountEmail",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10
					}
				}
			},
			{
				"operation": "insert",
				"name": "nbcCustomModuleAngular_3d3baa08-21f8-4a8e-8785-514a68214be3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"angular-grid-layout-item",
							"nbcCustomModuleAngular",
							"uniqueGuid-3d3baa08-21f8-4a8e-8785-514a68214be3",
							"sysSchemaUId-bd89a353-8900-431b-b03e-9637a5c90f28",
							"tabName-AccountPageGeneralTabContainer"
						]
					},
					"id": "nbcCustomModuleAngular_3d3baa08-21f8-4a8e-8785-514a68214be3",
					"markerValue": "AngularModule"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "merge",
				"name": "AccountPageGeneralTabContainer",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "AlternativeName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Code",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "EmployeesNumber",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Ownership",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "AnnualRevenue",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactsAndStructureTabContainer",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "AccountPageServiceTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "RelationshipTabContainer",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTabContainer",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "NotesTabContainer",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 7
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
