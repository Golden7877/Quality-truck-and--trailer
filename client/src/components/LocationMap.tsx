export default function LocationMap() {
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=1234+Truck+Street,Anytown,ST&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
      ></iframe>
    </div>
  );
}
