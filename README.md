# BMW M Selection Website

Premium BMW workshop website with **dark mode toggle** and full service booking functionality.

## ✨ New Features

🌙 **Dark Mode Toggle** - Seamless light/dark theme switching with localStorage persistence
🎨 **Enhanced Polish** - Modern gradients, shadows, and animations
💎 **Premium Design** - Refined typography, spacing, and visual hierarchy
⚡ **Smooth Transitions** - Fluid animations throughout the interface

## 🚀 Quick Start - GitHub Pages Deployment

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `bmw-m-selection`)
3. Make it **Public**
4. **Don't** add README, .gitignore, or license

### Step 2: Upload Files
Upload these files to your repository:
- `index.html`
- `services.html`
- `gallery.html`
- `booking.html`
- `contact.html`
- `logo.png`
- `README.md`

**Easy Upload Method:**
1. Click "uploading an existing file" on GitHub
2. Drag all files into the browser
3. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Under **Source**: Select **main** branch
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/repository-name/`

## 📝 Important: Update Your Information

### Contact Details (All Pages)
Search and replace in all HTML files:

| Find | Replace With |
|------|-------------|
| `+1 (555) 123-4567` | Your phone number |
| `info@bmwmselection.com` | Your email |
| `123 Performance Drive, Auto District, CA 90210` | Your address |
| `1555123456` | Your WhatsApp number (numbers only) |

### Business Hours
Update in `contact.html` - search for "Workshop Hours" section

### Google Maps Integration
In `contact.html`, replace the map placeholder:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your business
3. Click **Share** → **Embed a map**
4. Copy the iframe code
5. Replace the map-container div in `contact.html`

## 🎨 Customization

### Dark Mode
The website includes a fully functional dark mode toggle in the navigation bar. The theme preference is saved to localStorage and persists across sessions.

**Dark Mode Features:**
- 🌙 Toggle button in navigation (top right)
- 💾 Theme preference saved automatically
- 🎨 Optimized color schemes for both modes
- ⚡ Smooth transitions between themes

**To customize dark mode colors**, edit the CSS variables:
```css
[data-theme="dark"] {
    --bg-primary: #0F172A;      /* Main background */
    --bg-secondary: #1E293B;    /* Secondary background */
    --text-primary: #F1F5F9;    /* Main text color */
    --text-secondary: #94A3B8;  /* Secondary text */
    /* Edit these values to customize */
}
```

### Change Colors
Edit CSS variables at the top of each HTML file:
```css
:root {
    --bmw-blue-light: #1C69D4;
    --bmw-m-blue: #00A4E4;
    --bmw-m-red: #E31E24;
    /* Edit these values */
}
```

### Add Real Images
Replace gallery placeholders in `gallery.html`:
```html
<div class="gallery-image">
    <img src="your-image.jpg" style="width:100%; height:100%; object-fit:cover;">
</div>
```

## 🔧 Make Forms Work

### Option 1: WhatsApp (Easiest)
In `booking.html`, uncomment lines 295-298:
```javascript
const whatsappUrl = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappUrl, '_blank');
```

### Option 2: Email Service (Free)
Use [EmailJS](https://www.emailjs.com):
1. Sign up for free
2. Add their script to your HTML
3. Configure email templates
4. Connect to forms

### Option 3: Formspree
Add to form:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📱 Features
✅ Mobile responsive  
✅ BMW M branding with your logo  
✅ Service booking system  
✅ Interactive gallery  
✅ Contact forms  
✅ SEO optimized  
✅ Fast loading  

## 🌐 File Structure
```
repository/
├── index.html          (Homepage)
├── services.html       (Services page)
├── gallery.html        (Gallery with filters)
├── booking.html        (Booking form)
├── contact.html        (Contact page)
├── logo.png            (Your BMW M Selection logo)
└── README.md           (This file)
```

## ⚠️ Before Going Live Checklist

- [ ] Update all phone numbers
- [ ] Update email addresses  
- [ ] Update physical address
- [ ] Add Google Maps embed
- [ ] Update business hours
- [ ] Add real gallery images
- [ ] Test booking form
- [ ] Test contact form
- [ ] Connect WhatsApp/Email integration
- [ ] Test on mobile devices

## 📞 Need Help?

Common issues:
- **Site not loading?** Wait 5-10 minutes after enabling GitHub Pages
- **Images not showing?** Make sure files are in the same folder
- **Forms not working?** Integrate with EmailJS or WhatsApp

## 📄 License
© 2026 BMW M Selection. All rights reserved.

Independent BMW specialist - not affiliated with BMW AG.
