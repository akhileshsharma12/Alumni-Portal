CREATE TABLE jobs (
    job_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,      -- Unique job identifier
    user_id UUID,                                           -- References the user who posted the job
    title VARCHAR(100) NOT NULL,                           -- Job title
    company VARCHAR(100) NOT NULL,                         -- Company name
    location VARCHAR(100) NOT NULL,                        -- Job location (remote, on-site, hybrid)
    vacancies INT DEFAULT 1,                               -- Number of vacancies
    posted_date DATE DEFAULT CURRENT_DATE,                -- Date when the job is posted
    type VARCHAR(50) CHECK (type IN ('Remote', 'On-Site', 'Hybrid')) NOT NULL, -- Job type
    overview TEXT NOT NULL,                                -- Job description and responsibilities
    verification_status VARCHAR(50) CHECK (verification_status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending', -- Status of job verification
    created_at TIMESTAMP DEFAULT NOW(),                   -- Timestamp for job creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
