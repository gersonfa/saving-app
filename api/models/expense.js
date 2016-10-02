const mongoose = require('mongoose');
const Squema = mongoose.Schema;

const expenseSquema = new Squema({
    category : {
        type : String,
        enum : ['Transporte','Alimentos', 'Vivienda', 'Entretenimiento', 'Servicios', 'Mascota', 'Deudas', 'Familia']
    }, 
    description : {
        type : String
    },
    amount : {
        type : Number
    },
    userId : {
        type : Squema.Types.ObjectId
    }
},
{
    timestamps : true
});

module.exports = mongoose.model('Expense', expenseSquema);
