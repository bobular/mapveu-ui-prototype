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
      panels: [
	{
	  label: 'Sample view info',
	  id: 'smpl_view_info',
          panelClass: 'ViewInfo'
	},
	{
	  label: 'Info table',
	  id: 'smpl_info_table',
          panelClass: 'InfoTable'
	}
      ]
    },

    {
      label: 'Genotype',
      id: 'geno'
    }

  ]
};
