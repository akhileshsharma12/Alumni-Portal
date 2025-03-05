CREATE TABLE alumni_memories (
    memory_id UUID DEFAULT gen_random_uuid() PRIMARY KEY, -- Unique ID for each memory
    user_id UUID NOT NULL,                               -- References the user in the users table
    title VARCHAR(255) NOT NULL,                        -- Memory title
    image_url TEXT NOT NULL,                            -- URL of the memory image
    created_at TIMESTAMP DEFAULT NOW(),                 -- Timestamp of memory creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
