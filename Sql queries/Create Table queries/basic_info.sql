CREATE TABLE basic_info (
    profile_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,   -- Unique identifier for the profile
    user_id UUID UNIQUE NOT NULL,                            -- References the user in the users table
    email VARCHAR(255) UNIQUE NOT NULL,                     -- Email of the user
    phone_no VARCHAR(20) UNIQUE NOT NULL,                   -- Contact number
    linkedin_url VARCHAR(255),                               -- LinkedIn profile URL (optional)
    address TEXT NOT NULL,                                   -- User's address
    birth_date DATE NOT NULL,                                -- User's birth date
    marital_status VARCHAR(20) CHECK (marital_status IN ('Single', 'Married', 'Other')) NOT NULL, -- Marital status
    created_at TIMESTAMP DEFAULT NOW(),                      -- Timestamp of profile creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
