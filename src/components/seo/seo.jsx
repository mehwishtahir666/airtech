import React from "react"
import "./seo.css"
import image01 from "./images/seo-tool-bg.webp"
import image02 from "./images/default.png"
import image03 from "./images/what-are-seo-services__01.png"
import image04 from "./images/best-seo-company6.png"
import image05 from "./images/best-seo-company7.png"
import image06 from "./images/best-seo-company10.png"
import { HiArrowSmRight } from "react-icons/hi"
import { PiArrowUUpRightBold } from "react-icons/pi"
import { BsArrowRightShort } from "react-icons/bs"
const Seo = () => {
    return (
        <>
            <div className="container-fluid border border-primary h-100 ">
                <div className="seo-container row d-flex mt-2">
                    <div className="seo_rightdiv col-3 border border-danger ">
                        <img className="seo_rightside-img " src={image01} alt="" />
                        <img className="seo_rightpercentage-img " src={image02} alt="" />
                        <h3 className="seo_rightside-h3 mt-4 fw-bolder">How Is Your Website’s SEO?</h3>
                        <p className="seo_rightside-p mt-3 " >Use our free tool to get your score calculated in under 60 seconds.</p>
                        <div className="seo_bulletpoints col border-0 border-success h-auto">


                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none"> Custom strategy</a></div>
                            </div>

                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none"> SEO audit</a> </div>
                            </div>


                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none"> Off-page optimization</a></div>
                            </div>


                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none"> On-page optimization</a> </div>
                            </div>

                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none"> Ongoing optimization</a> </div>
                            </div>

                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none"> Monthly reports</a> </div>
                            </div>

                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none">ROI tracking</a> </div>
                            </div>

                            <div className="seo_bulletpoints-row row w-100 m-auto border-0 border-danger d-flex align-items-center  ">
                                <div className="col-1 "><HiArrowSmRight /></div>
                                <div className="col-10 mt-1"><a href="#" class="seo_text-reset text-decoration-none">First-party data activation</a></div>
                            </div>
                        </div>
                    </div>












                    <div className="seo_leftdiv col-9 border border-success ">
                        <h1 className="seo_leftdiv-h1 mt-4">What our SEO services include?</h1>
                        <img className="mt-2" src={image03} alt="" />
                        <p className="seo_leftdiv-p mt-4">Now that you know the definition of SEO services, it’s essential to review the services provided by SEO companies. While every digital marketing company is different, you want to partner with a provider that offers the complete package for SEO campaigns.</p>

                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">Custom strategy</h1></div>
                        <p className="seo_leftdiv-p1 mt-3">A custom strategy is a core component of the definition of SEO services. When you have an approach personalized to your business, you can maximize your return on investment (ROI) from SEO. That translates to more calls, orders, and visits to your company.</p>
                        <p className="seo_leftdiv-p1 mt-3">If you invest in an SEO service package, your team needs to ensure your agency provides a custom strategy. That’s because many SEO companies, especially those promoting “cheap” SEO plans, deliver cookie-cutter or copy-and-paste strategies.</p>
                        <img src={image04} alt="" />
                        <p className="seo_leftdiv-p1 mt-4">With a cookie-cutter approach to SEO, your business doesn’t get the maximum ROI. In most cases, companies fail to appear on the first page of search results with these kinds of strategies, which doesn’t help your business because only 25% of users go beyond the first page of search results.</p>
                        <p className="seo_leftdiv-p1 mt-3">Think about it this way: If you owned a medical practice, would you want to use the same SEO strategy as a retail store? Of course not! Your audience is different, and how you reach them through search (and bring them to your practice) is different too.</p>
                        <p className="seo_leftdiv-p1 mt-3" >That’s why your team needs to invest in services from SEO companies that offer customized strategies.</p>




                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">SEO audit</h1></div>

                        <p className="seo_leftdiv-p1 mt-3">
                            Every SEO company’s services should include an SEO audit.
                        </p>
                        <img src={image05} alt="" />
                        <p className="seo_leftdiv-p1 mt-4">With an SEO audit, your SEO provider takes an in-depth look at your current strategy.</p>
                        <p className="seo_leftdiv-p1 mt-3" >Even if you don’t have an SEO strategy, your agency will evaluate your website from an SEO perspective, looking at where it excels and where it could use SEO improvements. While you can use free SEO audit tools, they don’t provide you with the same insight as a team of SEO specialists.</p>
                        <p className="seo_leftdiv-p1 mt-3">That’s why SEO services should include an audit.</p>
                        <p className="seo_leftdiv-p1 mt-3">If they don’t, it shows a lack of preparation and investment by your SEO company. A missing SEO audit also suggests your agency doesn’t plan to create a custom strategy for your business. Instead, they use a template, which is why they don’t want to invest time auditing your site.</p>
                        <p className="seo_leftdiv-p1 mt-3">The best SEO solutions are tailored to your business, brand, and audiences.</p>


                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">Off-page optimization</h1></div>
                        <p className="seo_leftdiv-p1 mt-4">When you invest in SEO services, your package should include off-page optimization. In SEO, off-page optimization refers to optimizing factors outside your website that influence your ranking in search results.</p>
                        <img src={image06} alt="" />

                        <p className="seo_leftdiv-p1 mt-4">For example, your backlink profile can shape your ranking in search results.</p>
                        <p className="seo_leftdiv-p1 mt-3">Your backlink profile, for reference, refers to the quantity and quality of websites linking to your site. A food blogger, for example, may link to your website when sharing the custom cookies you made for their wedding.</p>
                        <p className="seo_leftdiv-p1 mt-3">As a part of an SEO company’s services, they often provide the following for off-page SEO:</p>

                        <div className="seo_leftdiv-small col-12  d-flex border-0  border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Promoting your website content to bloggers and webmasters</p></div>


                        <div className="seo_leftdiv-small col-12 d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Developing shareable content for your site’s blog</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Monitoring your company’s mentions across social media by users and influencers</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Optimizing your Google My Business profile</p></div>


                        <p className="seo_leftdiv-p1 mt-4">If you don’t know if an SEO agency offers off-page optimization with their SEO plans, just ask!</p>
                        <p className="seo_leftdiv-p1 mt-3">They can provide your team with an overview of what their SEO marketing services include and the meaning of specific deliverables. That way, your staff can make an educated decision when choosing an agency.</p>

                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">On-page optimization</h1></div>

                        <p className="seo_leftdiv-p1 mt-4">On-page optimization is another critical component of the meaning of SEO services. With on-page optimization, your search engine optimization firm focuses on optimizing the features of your website for search engines like Google.</p>
                        <img src="" alt="" />
                        <p className="seo_leftdiv-p1 mt-4">A few examples of some on-page SEO service deliverables include:</p>

                        <div className="seo_leftdiv-small col-12  d-flex border-0  border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Promoting your website content to bloggers and webmasters</p></div>


                        <div className="seo_leftdiv-small col-12 d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Developing shareable content for your site’s blog</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Monitoring your company’s mentions across social media by users and influencers</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Optimizing your Google My Business profile</p></div>


                        <p className="seo_leftdiv-p1 mt-4">If you don’t know if an SEO agency offers off-page optimization with their SEO plans, just ask!</p>
                        <p className="seo_leftdiv-p1 mt-3">They can provide your team with an overview of what their SEO marketing services include and the meaning of specific deliverables. That way, your staff can make an educated decision when choosing an agency.</p>




                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">On-page optimization</h1></div>

                        <p className="seo_leftdiv-p1 mt-4">On-page optimization is another critical component of the meaning of SEO services. With on-page optimization, your search engine optimization firm focuses on optimizing the features of your website for search engines like Google.</p>

                        <img src="" alt="" />

                        <p className="seo_leftdiv-p1 mt-4">A few examples of some on-page SEO service deliverables include:</p>


                        <div className="seo_leftdiv-small col-12  d-flex border-0  border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Updating title tags, meta descriptions, and header tags for search</p></div>


                        <div className="seo_leftdiv-small col-12 d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Auditing your website’s information architecture, redirects, and internal linking structure</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Creating a sitemap</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Optimizing your site images according to best practices</p></div>

                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Researching and optimizing your website with valuable and relevant keywords</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Producing new, SEO-friendly content for your site</p></div>


                        <div className="seo_leftdiv-small col-12  d-flex border-0 border-danger align-items-center fs-5"><BsArrowRightShort className="seo_icons" />
                            <p className="mx-3 seo_leftdiv-small-para ">Analyzing the usability, speed, and design of your site</p></div>

                        <p className="seo_leftdiv-p1 mt-4">In most cases, on-page optimization makes up a significant portion of your SEO package. That’s why if an SEO company doesn’t offer on-page SEO, they aren’t providing search engine optimization services, which means your team needs to find another agency.</p>



                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">Ongoing optimization</h1></div>

                        <p className="seo_leftdiv-p1 mt-4">SEO is an ongoing strategy, which is why the definition of SEO services generally emphasizes the partnership that your business forms with your SEO agency. In comparison, SEO consulting services focus on short-term assistance, like with a website redesign project.</p>

                        <p className="seo_leftdiv-p1 mt-4">You’re collaborating with your agency continuously, which is why SEO companies should work as an extension of your business to grow your search engine visibility and revenue from search. It’s also why their services should include progressive optimization.</p>

                        <p className="seo_leftdiv-p1 mt-3">With continuous optimization, your SEO agency optimizes your site on an ongoing basis.</p>
                        <p className="seo_leftdiv-p1 mt-3">Even after your site meets SEO standards, they continue to find ways to improve and enhance your SEO strategy, which allows you to earn more traffic, leads, and sales from SEO.</p>

                        <img src="" alt="" />

                        <p className="seo_leftdiv-p1 mt-4">Your dedicated account manager, for example, may find additional keywords for your business to target.</p>

                        <p className="seo_leftdiv-p1 mt-3">This discovery translates into new content, which leads to promoting that content to bloggers and webmasters in your industry. No matter how advanced or successful your SEO strategy becomes, your company and SEO agency can make it one percent better.</p>

                        <p className="seo_leftdiv-p1 mt-3">That’s why it’s critical for your business to partner with an agency that recognizes that and sees the potential in your site.</p>

                        <div className="seo_leftdiv-heading col d-flex border-0 border-danger align-items-center fs-3"><PiArrowUUpRightBold />
                            <h1 className="mx-3 seo_leftdiv-h12 mt-1">Monthly reports</h1></div>


                           <p className="seo_leftdiv-p1 mt-4">Transparency is essential when it comes to SEO services.</p>


                          <p className="seo_leftdiv-p1 mt-3">You want an agency that your team can trust and rely on, which is why partnering with an SEO company that includes regular monthly reports is critical. With an SEO report, your business can receive immediate insight into the results of your SEO strategy.</p>

                             <p className="seo_leftdiv-p1 mt-3">As an example, your report may cover your:</p>





                    </div>



                </div>
            </div>
        </>
    )
}
export default Seo