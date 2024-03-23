## ระบบเฟรมเวิร์คและsoftwareที่ใช้(เบื้องต้น)
- frontend: React.js
- backend: Node.js
- Database: MongoDb *ต้องสร้างใหม่
- model: yolov7
- Docker

## Required Software
- VS code(for working on code) or other IDE
- Docker for running webapp
  
## Requirement library ลงในterminal
- Python
- npm >=v18

## วิธีรัน model
Link onedrive: [https://studentmahidolac-my.sharepoint.com/:f:/g/personal/daran_thw_student_mahidol_ac_th/EgdPhCtaSJJHpGLLYWafFPwB096bTL17e5rZvB2UW2vJXQ?e=cbniIc](https://studentmahidolac-my.sharepoint.com/:f:/g/personal/daran_thw_student_mahidol_ac_th/EgdPhCtaSJJHpGLLYWafFPwBhHCcD9os7bOX7P82c5e0Hw?e=NbZi4a)

1. install python
   
   1.1 สำหรับwindow
   https://phoenixnap.com/kb/how-to-install-python-3-windows#ftoc-heading-4
   - ต้องลงpy -m venv venv ก่อนเพื่อสร้างvirtual environment
3. cd โฟลเดอร์
   
   2.1 /venv/Scripts/activate 
5. pip install -r requirements. txt
6. รัน detect ดูวิธีรันในreadme.txt

   4.1 python detect.py --weights yolov7.pt --conf 0.25 --img-size 640 --source yourvideo.mp4 สำหรับรันdetect objectอื่นๆ
   
   4.2 python detect.py --weights best.pt --conf 0.25 --img-size 640 --source yourvideo.mp4 detect ปืนโดยเฉพาะ
   
   4.3 เวลา train ใช้คำสั่ง python train.py --workers 8 --device 0 --batch-size 32 --data data/coco.yaml --img 640 640 --cfg cfg/training/yolov7.yaml --weights '' --name yolov7 --hyp data/hyp.scratch.p5.yaml
 ซึ่งเราต้องเปลี่ยน data/coco.yaml ให้เป็นไฟล์ yaml ของตัวdatasetที่เราอยากใช้train ถ้าgpu memory runout ให้เปลี่ยน batch-size เหลือ 16หรือน้อยกว่า

## วิธีtrain model(ref: https://github.com/WongKinYiu/yolov7)
เวลา train ใช้คำสั่ง python train.py --workers 8 --device 0 --batch-size 32 --data data/coco.yaml --img 640 640 --cfg cfg/training/yolov7.yaml --weights '' --name yolov7 --hyp data/hyp.scratch.p5.yaml

ซึ่งเราต้องเปลี่ยน data/coco.yaml ให้เป็นไฟล์ yaml ของตัวdatasetที่เราอยากใช้train ถ้าgpu memory runout ให้เปลี่ยน batch-size เหลือ 16หรือน้อยกว่า

## วิธีรันwebappบนDocker
1. `docker compose build`
2. `docker compose up -d`

## วิธีรันReactผ่านVS code
1. `npm start`


# React Readme
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


