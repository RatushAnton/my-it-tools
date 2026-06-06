<script setup lang="ts">
    import { ref, computed } from 'vue';
    import CryptoJS from 'crypto-js';

    const input = ref('');
    const algorithm = ref('SHA256');

    const hash = computed(() => {
        if (!input.value) return '';

        switch (algorithm.value) {
            case 'MD5':
                return CryptoJS.MD5(input.value).toString();
            case 'SHA1':
                return CryptoJS.SHA1(input.value).toString();
            case 'SHA256':
                return CryptoJS.SHA256(input.value).toString();
            case 'SHA512':
                return CryptoJS.SHA512(input.value).toString();
            default:
                return '';
        }
    });

    async function copyHash() {
        if (!hash.value) return;

    await navigator.clipboard.writeText(hash.value);
    }
</script>


<template>
    <main class="mx-auto max-w-4xl px-6 py-10">
        <div class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h1 class="mb-2 text-3xl font-bold">
                Hash Text
            </h1>
            <p class="mb-6 text-slate-400"> Generate hashes from text using common algorithms. </p>
            <div class="space-y-5">
                <div>
                    <label class="mb-2 block text-sm font-medium"> Input Text </label>
                    <textarea v-model="input" rows="6" class="w-full rounded-lg border border-slate-700 bg-slate-950 p-4" placeholder="Enter text..."/>
                </div>
                <div>
                    <label class="mb-2 block text-sm font-medium"> Algorithm </label>
                    <select v-model="algorithm" class="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2">
                        <option>MD5</option>
                        <option>SHA1</option>
                        <option>SHA256</option>
                        <option>SHA512</option>
                    </select>
                </div>
                <div>
                    <label class="mb-2 block text-sm font-medium"> Result </label>
                    <textarea :value="hash" readonly rows="4" class="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-sm"/>
                </div>
                <button class="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-500" @click="copyHash"> Copy Hash </button>
            </div>
        </div>
    </main>
</template>