export default function CarForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        // console.log(formData);

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        // console.log(result);
    };

    return (
        <form className="" style={{ width: 300 }} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="make" className="form-label">Make</label>
                <input className="form-control" id="make" name="make" type="text" />
            </div>

            <div className="mb-3">
                <label htmlFor="model" className="form-label">Model</label>
                <input className="form-control" id="model" name="model" type="text" />
            </div>

            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input className="form-control" id="image" name="image" type="text" />
            </div>

            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <textarea name="description" id="desc" type="text" />
            </div>

                <button id="submit" type="submit" className="btn btn-dark">Create Car</button>
        </form>
    );
};