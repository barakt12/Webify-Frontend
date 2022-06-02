export function SubscribersList({ subscribers }) {
  const dataFields = Object.keys(subscribers[0])
  console.log(subscribers)
  return (
    <div className="subscribers-list-contsiner">
      Subscribers
      <table>
        <thead>
          <tr>
            {dataFields.map((field, idx) => (
              <th key={idx}>{field === 'fullName' ? 'full name' : field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber, idx) => (
            <tr key={idx}>
              {dataFields.map((field, tdIdx) => (
                <td key={tdIdx}>{subscriber[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
