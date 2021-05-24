const Sequelize = require('sequelize');
const fetch = require('node-fetch');


const db = new Sequelize('postgres://localhost:5432/frn_data', {logging:false})
const API_KEY = '6c93a148aa30236b2b03b7571f3929ce4ba0b3f1bfec802794cae11494347e4b'
const url = `https://portal.suncom.myflorida.com/stash/protected/mfn2/erate_complex.json?auth=${API_KEY}`;

const Application = db.define('application', {
    id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true
    },
    frn: { 
        type: Sequelize.DataTypes.STRING,
    },
    fundingYear: {
        type: Sequelize.DataTypes.STRING
    }
});

const Circuit = db.define('circuit', {
    inv_num: {
        type: Sequelize.DataTypes.STRING,
    },
    discount: {
        type: Sequelize.DataTypes.STRING,
    },
    start: {
        type: Sequelize.DataTypes.DATE,
    },
    end: {
        type: Sequelize.DataTypes.DATE
    },
    total_eligible: {
        type: Sequelize.DataTypes.STRING
    },
    appNum: {
        type: Sequelize.DataTypes.STRING,
    }
});


Circuit.belongsTo(Application, {foreignKey: 'appNum', constraints:false, targetKey: 'id'});
Application.hasMany(Circuit, {foreignKey: 'appNum', constraints:false, sourceKey: 'id'});

const seed = async () => {
    try{
        await db.sync({ force: true })
        const apiResponse = await fetch(url)
        .then((res) => res.json())
        console.log('fetch to API endpoint called');
        const data = await Promise.all([
            apiResponse.fundingDetail.map(app => {
                Application.create({
                id: app['471'], frn: app.frn, fundingYear: app.fundingYear
            }),
                app.inventory.map(inv => {
                    Circuit.create({
                        inv_num: inv.id, discount: inv.discount, start: inv.start,
                        end: inv.end, total_eligible: inv.total_eligible,
                        appNum: app['471']
                    })
                })
        }),
        ])
        console.log('Sync and Seed of API Data complete')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    seed,
    models: {
        Application,
        Circuit
    }
}