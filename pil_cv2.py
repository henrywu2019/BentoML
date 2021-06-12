import cv2
import imageio as iio
import skimage.io as sio
import numpy as np
from PIL import Image

img_path = "/Users/fuhwu/Desktop/jpeg/dog.jpeg"

d1 = cv2.imread("/Users/fuhwu/Desktop/jpeg/dog.jpeg")  # BGR
d2 = iio.imread("/Users/fuhwu/Desktop/jpeg/dog.jpeg")[:, :, ::-1]  # RGB = > BGR
d3 = sio.imread(img_path)[:, :, ::-1]
pic = Image.open(img_path)
d4 = np.array(pic)[:, :, ::-1]

"""while True:
    cv2.imshow('ImageWindow', d2)
    if cv2.waitKey(20) & 0xFF == 27:
        break
cv2.imshow('BGR Image', d2)

while True:
    cv2.imshow('ImageWindow', d1)
    if cv2.waitKey(20) & 0xFF == 27:
        break
cv2.imshow('BGR Image', d2)"""

#print(d1 == d2)
#print(d1 == d3)
#print(d1)
#print(d2)
count = np.count_nonzero(d1 == d2)
print(count)
print(np.prod(d1.shape))

count = np.count_nonzero(d2 == d3)
print(count)
print(np.prod(d1.shape))

count = np.count_nonzero(d3 == d4)
print(count)
print(np.prod(d1.shape))