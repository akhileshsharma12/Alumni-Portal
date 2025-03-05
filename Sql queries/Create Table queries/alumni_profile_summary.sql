CREATE TABLE alumni_profile_summaries (
    summary_id UUID DEFAULT gen_random_uuid() PRIMARY KEY, -- Unique ID for each profile summary
    user_id UUID NOT NULL,                                 -- References the user in the users table
    profile_summary TEXT NOT NULL,                        -- Detailed profile summary
    updated_at TIMESTAMP DEFAULT NOW(),                   -- Timestamp for tracking updates
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
