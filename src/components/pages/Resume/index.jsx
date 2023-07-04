export default function Resume() {
  const resumeUrl =
    "https://docs.google.com/document/d/1Rt9jybR8QDlO13gPpARZHHjeICpMOe892L_k8xWpXz8/edit?usp=sharing";
  return (
    <div>
      <h1>
        Get my resume:
        <a href={resumeUrl} className="btn btn-primary"></a>
      </h1>
    </div>
  );
}
