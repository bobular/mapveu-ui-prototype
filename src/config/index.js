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
      fields: [
	{
	  label: 'Sample ID',
	  displayField: 'sample_id_s',
	  queryField: 'sample_id_s',
	  category: false	  
	},
	{
	  label: 'Sample name',
	  displayField: 'label',
	  queryField: 'label',
	  category: false	  
	},
	{
	  label: 'Sample type',
	  displayField: 'sample_type',
	  queryField: 'sample_type_cvterms',
	  category: true
	},
	{
	  label: 'Description',
	  displayField: 'description',
	  queryField: 'description',
	  category: false
	},
	{
	  label: 'Species',
	  displayField: 'species_category',
	  queryField: 'species_cvterms',
	  category: true
	},
	{
	  label: 'Collection protocols',
	  displayField: 'collection_protocols_category',
	  queryField: 'collection_protocols_cvterms',
	  category: true
	}
      ],
      panels: [
	{
	  label: 'View info',
          className: 'ViewInfo'
	},
	{
	  label: 'Info table',
          className: 'InfoTable'
	}
      ],
      markers: [
	{
	  label: 'Samples',
	  className: 'RecordCount'
	},
	{
	  label: 'Collections',
	  className: 'CollectionCount'
	}
      ]
    },

    {
      label: 'Genotype',
      className: 'Genotype', 
      description: 'This view shows genotype records',
      recordLabelSingular: 'genotype',
      recordLabelPlural: 'genotypes',      
      fields: [
	{
	  label: 'Sample ID',
	  displayField: 'sample_id_s',
	  queryField: 'sample_id_s',
	  category: false	  
	},
	{
	  label: 'Sample name',
	  displayField: 'sample_name_s',
	  queryField: 'sample_name_s',
	  category: false	  
	},
	{
	  label: 'Sample type',
	  displayField: 'sample_type',
	  queryField: 'sample_type_cvterms',
	  category: true
	},
	{
	  label: 'Species',
	  displayField: 'species_category',
	  queryField: 'species_cvterms',
	  category: true
	},
	{
	  label: 'Collection protocols',
	  displayField: 'collection_protocols_category',
	  queryField: 'collection_protocols_cvterms',
	  category: true
	},
	{
	  label: 'Assay ID',
	  displayField: 'assay_id_s',
	  queryField: 'assay_id_s',
	  category: false	  
	},
	{
	  label: 'Assay sample size',
	  displayField: 'sample_size_i',
	  queryField: null,
	  category: false
	},
	{
	  label: 'Genotype summary',
	  displayField: 'description',
	  queryField: 'description',
	  category: false
	},
	{
	  label: 'Genotype',
	  displayField: 'genotype_name_s',
	  queryField: 'genotype_cvterms',
	  category: true
	},
	{
	  label: 'Locus',
	  displayField: 'locus_name_s',
	  queryField: 'locus_name_cvterms',
	  category: true
	},
	{
	  label: 'Prevalence',
	  displayField: 'genotype_mutated_protein_value_f',
	  queryField: null,
	  category: false
	},
	{
	  label: 'Prevalence unit',
	  displayField: 'genotype_mutated_protein_unit_s',
	  queryField: null,
	  category: false
	}
      ],
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
      ],
      markers: [
	{
	  label: 'Allele count',
	  className: 'AlleleCount'
	},
	{
	  label: 'Genotype records',
	  className: 'RecordCount'
	}
      ]

    }

  ]
};
