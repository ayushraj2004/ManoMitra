'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/generate-culturally-relevant-response.ts';
import '@/ai/flows/suggest-study-improvements.ts';
import '@/ai/flows/roleplay-chat-flow.ts';
