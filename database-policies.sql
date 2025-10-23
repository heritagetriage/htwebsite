-- Row Level Security Policies for contact_forms table
-- Run this AFTER creating the table with database-setup.sql

-- Enable Row Level Security
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (for contact form submissions)
CREATE POLICY contact_forms_insert_policy ON contact_forms
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all records (for admin)
CREATE POLICY contact_forms_select_policy ON contact_forms
  FOR SELECT TO authenticated
  USING (true);

-- Allow authenticated users to update records (for admin)
CREATE POLICY contact_forms_update_policy ON contact_forms
  FOR UPDATE TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_forms_status ON contact_forms(status);