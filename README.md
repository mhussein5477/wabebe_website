# Wabebe Fleet Management Website

## Overview
Wabebe is a comprehensive fleet management system designed for East African markets. This website includes landing pages, authentication, and dashboard interfaces for both individual vehicle owners and SACCO operators.

## Tagline
**"Where Every Trip Counts - Your Fleet, On Autopilot"**

## Features
- Modern, responsive design
- Mobile app solution for individual owners
- Web/desktop platform for SACCOs
- Real-time tracking and monitoring
- AI-powered route optimization
- WhatsApp and M-Pesa integration
- Predictive maintenance
- Driver gamification
- Incident management

## File Structure
```
wabebe-website/
├── index.html              # Main landing page
├── css/
│   ├── styles.css          # Main website styles
│   ├── auth.css            # Authentication pages styles
│   └── dashboard.css       # Dashboard styles
├── js/
│   ├── main.js             # Main website JavaScript
│   ├── auth.js             # Authentication JavaScript
│   └── dashboard.js        # Dashboard JavaScript
├── images/
│   └── nairobi-traffic.jpg # Hero image
├── pages/
│   ├── login.html          # Login page
│   └── dashboard.html      # Dashboard page
└── README.md               # This file
```

## How to Run

### Option 1: Direct Open
1. Extract the zip file
2. Open `index.html` in your web browser
3. Navigate through the site

### Option 2: Local Server (Recommended)
1. Extract the zip file
2. Open terminal/command prompt in the website folder
3. Run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # OR using Node.js
   npx http-server
   ```
4. Open browser and go to `http://localhost:8000`

## Pages Included

### 1. Landing Page (index.html)
- Hero section with stats
- Problem statement
- Features showcase
- Solutions for different user types
- How it works
- Pricing plans
- Testimonials
- Contact form

### 2. Login Page (pages/login.html)
- Email and password authentication
- Remember me option
- Forgot password link
- Biometric authentication button
- Clean, modern design matching Wabebe branding

### 3. Dashboard (pages/dashboard.html)
- Fleet overview with key metrics
- Today's trips display
- Active fleet status
- Collection tracking
- Quick access navigation
- Real-time trip monitoring

## Design Features
- **Colors:**
  - Primary: #2D4263 (Navy Blue)
  - Secondary: #00D9A5 (Teal Green)
  - Accent: #FF6B35 (Orange)

- **Typography:** Segoe UI, clean and professional

- **Components:**
  - Floating animation cards
  - Interactive stat cards
  - Smooth transitions
  - Responsive grid layouts
  - Mobile-first approach

## Customization

### Changing Colors
Edit the CSS variables in any CSS file:
```css
:root {
    --primary-color: #2D4263;
    --secondary-color: #00D9A5;
    --accent-color: #FF6B35;
}
```

### Adding More Pages
1. Create new HTML file in `pages/` directory
2. Link the appropriate CSS files
3. Add navigation links in main navigation

### Modifying Content
- All text content is in HTML files
- Update company information in footer
- Modify stats and features as needed

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Future Enhancements
- Backend API integration
- Real GPS tracking
- Live chat support
- Payment gateway integration
- Mobile app development
- Advanced analytics dashboard
- Multi-language support (Swahili, English)

## Contact & Support
- Email: info@wabebe.co.ke
- Phone: +254 700 000 000
- WhatsApp: +254 700 000 000
- Website: www.wabebe.co.ke

## License
© 2026 Wabebe Limited. All rights reserved.

## Credits
- Design inspired by modern fleet management systems
- Icons from Font Awesome
- Images from uploaded assets

---

**Built with ❤️ for East African Fleet Managers**

*"While competitors track vehicles, we run entire fleet operations."*
