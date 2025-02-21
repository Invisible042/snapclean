from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    # Open the input image
    input_image = Image.open(input_path)

    # Remove the background
    output_image = remove(input_image)

    # Save the output image
    output_image.save(output_path)

if __name__ == "__main__":
    # Example usage
    input_image_path = "input.jpg"  # Path to the input image
    output_image_path = "output.png"  # Path to save the output image

    remove_background(input_image_path, output_image_path)
    print(f"Background removed and saved to {output_image_path}")