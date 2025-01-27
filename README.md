# MindAR Chinese New Year AR Experience

A festive web-based Augmented Reality (AR) application that creates an interactive Chinese New Year experience with AR video content and animated decorations. Built with MindAR and A-Frame.

## Features

- Augmented Reality video playback using MindAR image tracking
- Festive Chinese New Year decorations and animations
- Animated greeting text (新年快乐)
- Mobile-friendly interface with responsive design
- Interactive video controls for better user experience

## Prerequisites

- A modern web browser with WebAR support
- A webcam or mobile device camera
- Local development server (for testing)

## Setup

1. Clone this repository:
   ```bash
   git clone [your-repository-url]
   cd mindar-cny
   ```

2. Serve the files using a local web server. You can use any of these methods:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - PHP: `php -S localhost:8000`

3. Open your browser and navigate to `http://localhost:8000`

## Usage

1. Allow camera access when prompted
2. Point your camera at the target image
3. The AR experience will activate, showing:
   - Festive Chinese New Year decorations
   - Animated "新年快乐" greeting
   - AR video content when target is detected
4. Use the play button if the video appears black on mobile devices
5. The video will pause when the target is lost from view

## Technologies Used

- [MindAR](https://github.com/hiukim/mind-ar-js) - Web AR library
- [A-Frame](https://aframe.io/) - Web VR framework
- HTML5 Video
- TailwindCSS - Utility-first CSS framework

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Special thanks to the following creators for their contributions:

- [Flaticon](https://www.flaticon.com/) - For providing various icons and visual elements
- [妙小仙](https://www.xiaohongshu.com/user/profile/5e5101ba000000000100114b) - For creative content contributions

## License

This project is open source and available under the [MIT License](LICENSE).