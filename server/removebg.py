import sys
from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    try:
        # Open the input image
        input_image = Image.open(input_path)

        # Remove the background
        output_image = remove(input_image)

        # Save the output image
        output_image.save(output_path)

        print(f"Background removed and saved to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python removebg.py <input_path> <output_path>")
        sys.exit(1)

    input_image_path = sys.argv[1]  # Get input path from command-line
    output_image_path = sys.argv[2]  # Get output path from command-line

    remove_background(input_image_path, output_image_path)
