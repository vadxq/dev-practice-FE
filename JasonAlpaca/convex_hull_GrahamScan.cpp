#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<stack>
#include<algorithm>
#include<vector>
using namespace std;
struct PointClass
{
       int x,y;
};
int n;
PointClass StandardPoint;
vector <PointClass> tstack;
vector <PointClass> points;
bool CompareFunction(const PointClass a,const PointClass b)
{
     int ax,ay,bx,by;
     ax=a.x-StandardPoint.x;ay=a.y-StandardPoint.y;
     bx=b.x-StandardPoint.x;by=b.y-StandardPoint.y;
     if (ax*by-ay*bx>0) return true;
     if (ax*by-ay*bx==0 && abs(ax)<abs(bx))  return true;
     return false;
};

void init()
{
     cin>>n;
     StandardPoint.x=10000000;StandardPoint.y=10000000;
     int x,y,toerase;
     PointClass pcin;
     for (int i=0;i<n;i++)
     {
         cin>>x>>y;
         pcin.x=x;pcin.y=y;points.push_back(pcin);
         if (StandardPoint.y>y || (StandardPoint.y==y && StandardPoint.x>x))
                  {StandardPoint.x=x;StandardPoint.y=y;toerase=i;}
         
     }
     points.erase(points.begin()+toerase);  
     sort(points.begin(),points.end(),CompareFunction);
     tstack.push_back(StandardPoint);
     tstack.push_back(points.front());points.erase(points.begin());
}
void work()
{
     vector <PointClass>::iterator it;
     PointClass ll,ln;
     for (it=points.begin();it<points.end();it++)
     {
         while (true){
               ll.x=tstack[tstack.size()-1].x-tstack[tstack.size()-2].x;
               ll.y=tstack[tstack.size()-1].y-tstack[tstack.size()-2].y;
               ln.x=it->x-tstack.at(tstack.size()-1).x;ln.y=it->y-tstack.at(tstack.size()-1).y;
               if (ln.x*ll.y-ln.y*ll.x<0) {tstack.push_back(*it);break;} else tstack.erase(tstack.end()-1);
         }
     }
}
void prints()
{
     vector <PointClass>::iterator it;
     cout<<"Answer:"<<endl;
     cout<<tstack.size()<<endl;
     for (it=tstack.begin();it<tstack.end();it++)
     {
         cout<<it->x<<' '<<it->y<<endl;
     }
 }
int main()
{
    init();
    work();
    prints();

}

