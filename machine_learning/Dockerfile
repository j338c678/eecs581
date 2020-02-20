FROM ubuntu:18.04

# Install camera dependencies
RUN sudo apt-get install ros-kinetic-usb_cam ros-kinetic-openni2-launch

# Install tensorflow into python virtualenv
RUN sudo apt-get install python-pip python-dev python-virtualenv
RUN virtualenv --system-site-packages ~/tensorflow
RUN source ~/tensorflow/bin/activate
RUN easy_install -U pip
RUN pip install --upgrade tensorflow

RUN mkdir ~/catkin_ws/ && mkdir ~/catkin_ws/src/

# Clone standard Vision messages repository and this repository into catkin_ws/src
RUN cd ~/catkin_ws/src
RUN git clone https://github.com/Kukanani/vision_msgs.git
RUN git clone https://github.com/osrf/tensorflow_object_detector.git

# Build tensorflow_object_detector and Vision message
RUN cd ~/catkin_ws && catkin_make

# Source catkin workspace's setup.bash:
RUN source ~/catkin_ws/devel/setup.bash

# Plug in camera and launch Single Shot Detector (varies per camera, NOTE: object_detect.
# launch also launches the openni2.launch file for the camera. If you are using any other
# camera, please change the camera topic in the launch file before launching the file)
CMD ["roslaunch", "tensorflow_object_detector", "object_detect.launch"]

# OR
# CMD ["roslaunch", "tensorflow_object_detector", "usb_cam_detector.launch"]

# If you want to try any other ML model:
# Download any Object Detection Models from the Tensorflow Object detection API and place it in data/models/.
# You can find the models in tensorflow Object Detection Model Zoo:
  # https://github.com/tensorflow/models/blob/master/object_detection/g3doc/detection_model_zoo.md.
# Extract the tar.gz file.
# Edit the MODEL_NAME and LABEL_NAME in detect_ros.py. By default it is ssd_mobilenet_v1_coco_11_06_2017 with mscoco_label_map.pbtxt respectively.
