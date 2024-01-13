
// Below is code to introduce CSS Slider
document.addEventListener('DOMContentLoaded', function () {
    const colorSlider = document.getElementById('color-slider');
    const colorValue = document.getElementById('color-value');

    colorSlider.addEventListener('input', function () {
        updateColorScheme(colorSlider.value);
    });

    function updateColorScheme(value) {
        document.documentElement.style.setProperty('--primary-bg-color', getBackgroundColor(value));
        document.documentElement.style.setProperty('--text-color', getTextColor(value));
        colorValue.textContent = value;
    }

    function getBackgroundColor(value) {
        switch (value) {
            case '1':
                return '#ffffff'; // Set your color scheme values
            case '2':
                return '#f0f0f0';
            case '3':
                return '#dcdcdc';
            default:
                return '#ffffff';
        }
    }

    function getTextColor(value) {
        // Adjust text color based on your color schemes
        return value === '1' ? '#000000' : '#ffffff';
    }

    // Set initial color scheme
    updateColorScheme(colorSlider.value);
});
