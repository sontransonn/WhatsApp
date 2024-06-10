import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8080';

export const uploadImage = (request, response) => {
    if (!request.file)
        return response.status(404).json("File not found");

    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}