const Sequelize = require('sequelize')

const force = true;

module.exports = sequelize => {
  const applicants = sequelize.define('applicants', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  applicants.sync({ force: force });

  const employers = sequelize.define('employers', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  employers.sync({ force: force })

  const adverts = sequelize.define('adverts', {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  adverts.sync({ force: force })

  const applications = sequelize.define('applications', {
    fullcontent: {
      type: Sequelize.STRING,
      allowNull: false
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })

  applications.sync({ force: force })

  const resumes = sequelize.define('resumes', {
    education: {
      type: Sequelize.STRING,
      allowNull: true
    },
    company: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })

  resumes.sync({ force: force })

  const savedApplications = sequelize.define('savedApplications')

  savedApplications.sync({ force: force })

  const titles = sequelize.define('titles', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  titles.sync({ force: force })

  const resumesToTitles = sequelize.define('resumesToTitles')

  resumesToTitles.sync({ force: force })

  const skills = sequelize.define('skills', {
    skill: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  skills.sync({ force: force })

  const titlesToSkills = sequelize.define('titlesToSkills')

  titlesToSkills.sync({ force: force })

  employers.hasMany(adverts)
  applicants.hasMany(applications)
  applicants.hasOne(resumes)
  applications.hasOne(adverts)
  employers.belongsToMany(applications, { through: savedApplications })
  titles.belongsToMany(resumes, { through: resumesToTitles })
  skills.belongsToMany(titles, { through: titlesToSkills })

  sequelize.sync({ force: force })

  return {
    applicants,
    applications,
    resumes,
    employers,
    skills,
    titles,
    adverts,
    savedApplications
  }
}
