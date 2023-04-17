from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
# media path
print(os.path.join(os.path.dirname(BASE_DIR), 'media'))
print(Path(__file__).resolve().parent.parent.joinpath(Path('media')))
