import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zvvqmmkterlogfkuqvrw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dnFtbWt0ZXJsb2dma3VxdnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMzAzMTEsImV4cCI6MjA3MjcwNjMxMX0.KftchGuM79UorumMGhh0yVRN2J4ruSp_vCbQN6R9xZM'
export const supabase = createClient(supabaseUrl, supabaseKey)