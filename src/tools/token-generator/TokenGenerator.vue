<script setup lang="ts">
import {ref, computed} from 'vue';

const length = ref(32);
const includeUppercase = ref(true);
const includeLowercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(false);
const token = ref('');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '012345679';
const symbols = '!@#$%^&*()_+=[]{}|;:,.<>?';

const charset = computed(() => {
    let chars = '';

    if (includeUppercase.value) chars += upperCase;
    if (includeLowercase.value) chars += lowerCase;
    if (includeNumbers.value) chars += numbers;
    if (includeSymbols.value) chars += symbols;

    return chars;
});

function generateToken() {
    if (!charset.value) {
        token.value = 'Please select at least one character type.';
        return;
    }

    const array = new Uint32Array(length.value);
    crypto.getRandomValues(array);

    token.value = Array.from(array).map((value) => charset.value[value % charset.value.length]).join('');
}

async function copyToken() {
    if (!token.value) return;
    await navigator.clipboard.writeText(token.value);
}
generateToken();
</script>

<template>
    <main class="mx-auto max-w-3xl px-6 py-10 text-slate-100">
        <section class="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div class="mb-6">
                <h1 class="text-3xl font-bold">Token Generator</h1>
                <p class="mt-2 text-slate-400">
                    Generate secure random tokens directly from your browser.
                </p>
            </div>

            <div class="space-y-6">
                <label class="block">
                    <span class="mb-2 block text-sm font-medium text-slate-300">
                        Token length: {{ length }}
                    </span>
                    <input 
                        v-model="length"
                        type="range"
                        min="8"
                        max="128"
                        class="w-full"
                        @input="generateToken"
                    />
                </label>

                <div class="grid gap-3 sm:grid-cols-2">
                    <label class="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
                        <input v-model="includeUppercase" type="checkbox" @change="generateToken" />
                        <span> Uppercase (A-Z)</span>
                    </label>

                    <label class="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
                        <input v-model="includeLowercase" type="checkbox" @change="generateToken" />
                        <span> Lowercase (a-z)</span>
                    </label>

                    <label class="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
                        <input v-model="includeNumbers" type="checkbox" @change="generateToken" />
                        <span> Numbers (0-9)</span>
                    </label>

                    <label class="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
                        <input v-model="includeSymbols" type="checkbox" @change="generateToken" />
                        <span> Symbols</span>
                    </label>
                </div>

                <div>
                    <label class="mb-2 block text-sm font-medium text-slate-300">
                        Generated Token
                    </label>

                    <textarea
                        v-model="token"
                        readonly
                        rows="4"
                        class="w-full rounded-lg border-slate-700 bg-slate-950 p-4 font-mono text-sm text-green-400 outline-none"
                    />
                </div>

                <div class="flex gap-3">
                    <button class="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-500" @click="generateToken">Generate</button>
                    <button class="rounded-lg bg-slate-700 px-5 py-2 font-medium hover:bg-slate-600" @click="copyToken">Copy</button>
                </div>
            </div>
        </section>
    </main>
</template>