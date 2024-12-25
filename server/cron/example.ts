import { defineCronHandler } from '#nuxt/cron'
export default defineCronHandler(() => '*/20 * * * *', async () => {
    console.log('Running Cron every 20 Minutes')
    // call your function here
})
    