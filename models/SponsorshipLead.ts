import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISponsorshipLead extends Document {
  tier: string;
  companyName: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone?: string;
  message?: string;
  inquiryDate: Date;
  status: string;
}

const SponsorshipLeadSchema: Schema<ISponsorshipLead> = new Schema({
  tier: {
    type: String,
    required: [true, 'Please specify the selected sponsorship tier.'],
    enum: ['Bronze Tier', 'Silver Tier', 'Gold Tier'],
  },
  companyName: {
    type: String,
    required: [true, 'Please provide the company name.'],
  },
  contactPerson: {
    type: String,
    required: [true, 'Please provide the contact person name.'],
  },
  contactEmail: {
    type: String,
    required: [true, 'Please provide the contact email.'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  contactPhone: {
    type: String,
  },
  message: {
    type: String,
  },
  inquiryDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'New',
    enum: ['New', 'Contacted', 'Follow-up', 'Closed'],
  },
});

const SponsorshipLead: Model<ISponsorshipLead> =
  mongoose.models.SponsorshipLead || mongoose.model('SponsorshipLead', SponsorshipLeadSchema);

export default SponsorshipLead;
