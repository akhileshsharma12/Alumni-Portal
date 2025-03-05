CREATE TABLE rea_experience (
    experience_id UUID DEFAULT gen_random_uuid() PRIMARY KEY, -- Unique ID for experience entry
    user_id UUID NOT NULL,                                    -- References the user in the users table
    college_name VARCHAR(255) NOT NULL,                      -- College/University name
    department VARCHAR(255) NOT NULL,                        -- Department name
    start_year INT CHECK (start_year > 1900 AND start_year <= EXTRACT(YEAR FROM CURRENT_DATE)) NOT NULL, -- Start year validation
    end_year INT CHECK (end_year >= start_year) NOT NULL,    -- End year 
    created_at TIMESTAMP DEFAULT NOW(),                      -- Timestamp of entry creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
