CREATE TABLE alumni_skills (
    skill_id UUID DEFAULT gen_random_uuid() PRIMARY KEY, -- Unique ID for each skill
    user_id UUID NOT NULL,                               -- References the user in the users table
    skill_name VARCHAR(255) NOT NULL,                   -- Name of the skill (e.g., JavaScript, Data Analysis)
    created_at TIMESTAMP DEFAULT NOW(),                 -- Timestamp of entry creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
