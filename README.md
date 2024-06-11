
# Dynamic DNS with Cloudflare API

This project is a dynamic DNS (DDNS) solution that utilizes the Cloudflare API to update a subdomain's IP address based on changes in the local IP address. It consists of several TypeScript files that handle different actions such as fetching the local IP, comparing it with the Cloudflare IP, and updating the DNS record accordingly.

## Getting Started

To start the project, follow these steps:

1. Clone this repository to your local machine:

git clone https://github.com/muskan2622/ddns-cloudflare.git

Navigate to the project directory:
cd ddns-cloudflare

Install dependencies:
npm install

Set up your Cloudflare API credentials:

Replace the placeholder values in index.ts with your actual Cloudflare API credentials:

CLOUDFLARE_API_URL: The base URL for the Cloudflare API.

ZONE_ID: The Zone ID of your domain on Cloudflare.

RECORD_ID: The Record ID of the DNS record you want to update.

CLOUDFLARE_API_TOKEN: Your Cloudflare API token with necessary permissions.

Start the project:

npm start

This will execute the main script index.ts, which initiates the dynamic DNS update process.



Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

