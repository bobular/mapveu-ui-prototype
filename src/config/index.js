// Do we ideally want to replace this with data read from a YAML file?

//import yaml from 'js-yaml'
//import fs from 'fs'
//
//try {
//  var doc = yaml.safeLoad(fs.readFileSync('./mapveu-config.yaml', 'utf8'));
//} catch (e) {
//  console.log(e);
//}

export default {
  views: [
    {
      label: 'Sample',
      className: 'Sample',
      description: 'This view shows sample records',
      recordLabelSingular: 'sample',
      recordLabelPlural: 'samples',      
      panels: [
	{
	  label: 'View info',
          className: 'ViewInfo'
	},
	{
	  label: 'Info table',
          className: 'InfoTable'
	}
      ]
    },

    {
      label: 'Genotype',
      className: 'Genotype', 
      description: 'This view shows genotype records',
      recordLabelSingular: 'genotype',
      recordLabelPlural: 'genotypes',      
      panels: [
	{
	  label: 'View info',
          className: 'ViewInfo'
	},
	{
	  label: 'Info table',
          className: 'InfoTable'
	},
	{
	  label: 'Special genotype viz',
          className: 'SpecialGenotypeViz'
	}
      ]

    }

  ]
};
