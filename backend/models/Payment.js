const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
