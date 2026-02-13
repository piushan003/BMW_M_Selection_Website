# How to Add Dark Mode to Other Pages

The **index.html** file now has complete dark mode functionality. To add the same to other pages:

## Option 1: Quick Copy-Paste Method

### Step 1: Copy CSS Variables
From index.html, copy these CSS variable sections (at the top of the `<style>` tag):

```css
:root {
    --bmw-blue-light: #1C69D4;
    /* ... all color variables ... */
    
    /* Light mode (default) */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    /* ... etc ... */
}

[data-theme="dark"] {
    --bg-primary: #0F172A;
    --bg-secondary: #1E293B;
    /* ... etc ... */
}
```

### Step 2: Update All Color References
Replace all instances of:
- `#FFFFFF` or `white` → `var(--bg-primary)` or `var(--bg-card)`
- `#1C1C1C` or `black` → `var(--text-primary)`
- `#666666` or gray → `var(--text-secondary)`
- Border colors → `var(--border-color)`

### Step 3: Add Dark Mode Toggle Button
In the navigation, add:

```html
<div class="nav-right">
    <ul class="nav-links" id="navLinks">
        <!-- existing nav items -->
    </ul>
    <button class="theme-toggle" id="themeToggle">
        <span class="theme-icon">🌙</span>
    </button>
</div>
```

### Step 4: Add Dark Mode CSS
Add the theme toggle styles (copy from index.html):

```css
.theme-toggle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--bg-secondary);
    /* ... etc ... */
}
```

### Step 5: Add JavaScript
At the bottom of the page, before `</body>`, add:

```javascript
<script>
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
</script>
```

## Option 2: Use index.html as Template

The easiest method:

1. Open **index.html**
2. Copy the entire `<style>` section
3. Paste it into your other pages (services.html, gallery.html, etc.)
4. Keep the page-specific styles
5. Copy the dark mode toggle HTML and JavaScript

## Key CSS Variables to Use

Replace hard-coded colors with these variables:

| Use Case | Variable |
|----------|----------|
| Main background | `var(--bg-primary)` |
| Card/Section background | `var(--bg-card)` |
| Secondary background | `var(--bg-secondary)` |
| Main text | `var(--text-primary)` |
| Secondary text | `var(--text-secondary)` |
| Borders | `var(--border-color)` |
| Small shadow | `var(--shadow-sm)` |
| Medium shadow | `var(--shadow-md)` |
| Large shadow | `var(--shadow-lg)` |
| XL shadow | `var(--shadow-xl)` |

## Testing Dark Mode

1. Open the page in a browser
2. Click the moon/sun icon in the navigation
3. Theme should switch and persist on page reload
4. Check that all elements are readable in both modes

## Common Issues

**Theme not persisting?**
- Make sure localStorage script is included
- Check browser console for errors

**Some elements not changing color?**
- Replace hard-coded colors with CSS variables
- Check for `!important` overrides

**Toggle button not showing?**
- Verify HTML is added to navigation
- Check CSS is included
- Ensure button has `id="themeToggle"`

## Files to Update

Apply dark mode to:
- ✅ index.html (DONE)
- ⬜ services.html
- ⬜ gallery.html
- ⬜ booking.html
- ⬜ contact.html

All pages will share the same theme preference via localStorage!
