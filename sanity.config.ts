import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'zg-personal-poryfolio-nextjs-sanity',
  title: 'Sanity Portfolio Site',

  projectId: 'lo9nd4yz',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
