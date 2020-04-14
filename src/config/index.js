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
      id: 'smpl',
      description: 'This view shows sample records',
      singularRecordType: 'sample',
      pluralRecordType: 'samples',      
      panels: [
	{
	  label: 'View info',
	  id: 'info',
          panelClass: 'ViewInfo'
	},
	{
	  label: 'Info table',
	  id: 'table',
          panelClass: 'InfoTable'
	}
      ]
    },

    {
      label: 'Genotype',
      id: 'geno',
      description: 'This view shows genotype records',
      singularRecordType: 'genotype',
      pluralRecordType: 'genotypes',      
      panels: [
	{
	  label: 'View info',
	  id: 'info',
          panelClass: 'ViewInfo'
	},
	{
	  label: 'Info table',
	  id: 'table',
          panelClass: 'InfoTable'
	},
	{
	  label: 'Special genotype viz',
	  id: 'viz',
          panelClass: 'SpecialGenotypeViz'
	}
      ]

    }

  ]
};
