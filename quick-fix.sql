-- Quick fix for contact form 401 error
-- Run this in your Supabase SQL editor

-- Option 1: Temporarily disable RLS (easiest for testing)
ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;

-- Option 2: If you want to keep RLS enabled, run these commands instead:
-- (Comment out the line above and uncomment the lines below)

-- ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
-- 
-- -- Drop any existing policies that might be conflicting
-- DROP POLICY IF EXISTS contact_forms_insert_policy ON contact_forms;
-- DROP POLICY IF EXISTS contact_forms_select_policy ON contact_forms;
-- DROP POLICY IF EXISTS contact_forms_update_policy ON contact_forms;
-- 
-- -- Create a simple policy that allows anyone to insert
-- CREATE POLICY "Allow all inserts" ON contact_forms
--   FOR INSERT 
--   WITH CHECK (true);
-- 
-- -- Allow authenticated users to read (for admin)
-- CREATE POLICY "Allow authenticated reads" ON contact_forms
--   FOR SELECT TO authenticated
--   USING (true);