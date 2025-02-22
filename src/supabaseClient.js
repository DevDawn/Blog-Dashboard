import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://doyeanqecoghtzccrbzm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRveWVhbnFlY29naHR6Y2NyYnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNDc5NTgsImV4cCI6MjA1NTgyMzk1OH0.A7q9I8zfj142gjheiMnJLYBjJUKhidW8kpCXBpCF5ZU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
