const entityTitles: { title: string, routeName: string}[] = [];

entityTitles.push(
	{ title: "Contract Processing", routeName: "Contract" },
	{ title: "New User Request", routeName: "NewUser" },
	{ title: "View Submitted User Request", routeName: "ViewUser" },
	{ title: "Approval Worklist", routeName: "Approval" },
	{ title: "NoShow Worklist", routeName: "NoShow" },
	{ title: "Generic Worklist", routeName: "Worklist" },
	{ title: "Edit User Request", routeName:"EditUser" },
	{ title: "Rule Acceptance", routeName: "RuleAcceptance"},
	{ title: "Rule Trigger", routeName: "RuleTrigger"},

	{ title: "Start Day Worklist", routeName: "StartDay" },
);

export { entityTitles as EntityTitles };