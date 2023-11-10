export default defineAppConfig({
  docus: {
    title: 'Rareweave Docs',
    description: 'Rareweave project documentation.',
    image: 'https://avatars.githubusercontent.com/u/128148246?s=200&v=4',
    socials: {
      twitter: 'rareweave',
      github: 'rareweave',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'documentation',
      owner: 'rareweave',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})