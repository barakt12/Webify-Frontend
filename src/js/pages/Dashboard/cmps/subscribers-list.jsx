export function SubscribersList({ subscribers }) {
  const dataFields = Object.keys(subscribers[0])
  console.log(dataFields)
  return (
    <div className="subscribers-list-contsiner">
      Subscribers
      <table>
        <thead>
          {dataFields.map((field) => (
            <th>{field === 'fullName' ? 'full name' : field}</th>
          ))}
        </thead>
        <tbody>
          {subscribers.map((subscriber, idx) => (
            <tr key={idx}>
              {dataFields.map((field) => (
                <td>{subscriber[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
