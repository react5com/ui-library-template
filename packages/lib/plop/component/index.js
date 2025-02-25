export default function (plop) {
	// component generator
	plop.setGenerator('component', {
		description: 'A design system component',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'name:'
		}],
		actions: [{
			type: 'add',
			path: 'src/components/{{pascalCase name}}/index.tsx',
			templateFile: 'plop/templates/component/index.hbs'
		},
    {
			type: 'add',
			path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
			templateFile: 'plop/templates/component/component.hbs'
		},
    {
			type: 'add',
			path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
			templateFile: 'plop/templates/component/style.hbs'
		},
    {
			type: 'add',
			path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
			templateFile: 'plop/templates/component/test.hbs'
		},
    {
			type: 'add',
			path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
			templateFile: 'plop/templates/component/stories.hbs'
		},
    

    {
      type: 'append',
      path: 'src/components/index.tsx',
      template: "export * from './{{pascalCase name}}'"
    },
    ]
  });
};